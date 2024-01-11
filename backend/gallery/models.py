from django.db import models

class Video(models.Model):
    name = models.CharField(max_length=100)
    url = models.TextField()
    def __str__(self):
        return self.name

class Image(models.Model):
    name = models.CharField(max_length=100)
    image = models.FileField(upload_to="image/gallery/")
    def __str__(self):
        return self.name