from django.db import models

class Member(models.Model):
    name = models.CharField(max_length=50)
    image = models.FileField(upload_to="image/member/", blank=True)
    role = models.CharField(max_length=20, blank=True)
    about = models.TextField(blank=True)
    def __str__(self):
        return self.name