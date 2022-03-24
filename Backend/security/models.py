from django.db import models

gender_choices=(
    ("1","Male"),
    ("2","Female"),
    ("3","Others")
)




class Security(models.Model):
    uid = models.CharField(max_length=100,null=True)
    password = models.CharField(max_length=100,null=True)
    name= models.CharField(max_length=100,null=True)
    gender = models.CharField(max_length=20,choices=gender_choices,null=True)
    phone = models.CharField(max_length=10,null=True)
    email = models.EmailField(max_length=256,null=True)
    dp = models.ImageField(upload_to = "profile/",blank=True,null=True)
    isSecurity = models.BooleanField(default=True, editable=False)
    def __str__(self):
        return self.uid


# Create your models here.