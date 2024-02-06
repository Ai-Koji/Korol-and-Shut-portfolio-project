from django.db import models

class Member(models.Model):
    name = models.CharField(max_length=50)
    image = models.FileField(upload_to="images/member/", blank=True)
    role = models.CharField(max_length=20, blank=True)
    about = models.TextField(blank=True)
    is_main = models.BooleanField(blank=True)
    def __str__(self):
        return self.name