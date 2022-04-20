from http.client import HTTPResponse
from urllib import response
""" from msilib.schema import Class """
from unicodedata import name
from django.shortcuts import redirect, render, reverse
from django.http.response import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from .utils import *
from user.serializers import UserDataSerializer
from django import http
from rest_framework import status
from django.contrib.auth.models import User
from user.models import CampusJunta
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout


class UserDataView(APIView):
    def get(self,request):
        try:
            user= IsloggedIN(request)
            if user:
                userdata= UserDataSerializer(user)
                return Response(userdata.data,status=status.HTTP_200_OK)
            else:
                return Response(status= status.HTTP_404_NOT_FOUND)
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)


def main(request):
    return render(request, "main.html")



# Create your views here.
class Register(APIView):
    def post(self,request,*args, **kwargs):
        if isRegistered(request) is None:

            try:
                name = request.data.get("name","")
                uid = request.data.get("uid","")
                email = request.data.get("email","")
                phone = request.data.get("phone","")
                room_no = request.data.get("room_no","")
                address = request.data.get("address","")
                gender = request.data.get("gender","")
                password = request.data.get("password","")
                re_password = request.data.get("re_password","")
                dp = request.data.get("dp","")
                isSecurity = False
                register = CampusJunta(name=name,uid=uid,email=email,phone=phone,room_no=room_no,address=address,gender=gender,password=password,dp=dp,isSecurity = isSecurity)
                
                if password == re_password:
                    myuser = User.objects.create_user(username = name,email = email, password=password)
                    myuser.save()
                    register.save()
                    return Response(status=status.HTTP_200_OK)
                else:
                    return Response(status=status.HTTP_401_UNAUTHORIZED)
            except:
                return Response(status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({"message":"This UID is already registered with us"},status=status.HTTP_400_BAD_REQUEST)





class Login(APIView):
    def post(self, request, *args, **kwargs):
        user = IsloggedIN(request)
        if user:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        uid = request.data.get("uid","")
        password = request.data.get("password","")
        try:
            user = CampusJunta.objects.get(uid = uid)
            if user is not None:
                if password == user.password:
                #if CHECK_PASSWORD(password, user.password) :
                    request.session["uid"] = uid
                    request.session.modified = True
                    return Response(status=status.HTTP_200_OK)
                else:
                    return Response({"message":"Incorrect Password"},status=status.HTTP_401_UNAUTHORIZED)

        except:
            return Response({"message":"Given UID is not registered with us"},status=status.HTTP_401_UNAUTHORIZED)







   
class Logout(APIView):
    def post(self, request):
        if IsloggedIN(request) is not None:
            del request.session["uid"]
            return Response(status=status.HTTP_200_OK)
        return Response(status=status.HTTP_401_UNAUTHORIZED)

    
    
