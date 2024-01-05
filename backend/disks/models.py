from django.db import models

class Audio(models.Model):
    name = models.CharField(max_length=50)
    file = models.FileField(upload_to="media/audio/")
    def __str__(self):
        return self.name

class Image(models.Model):
    name = models.CharField(max_length=50)
    file = models.FileField(upload_to="media/images/")
    def __str__(self):
        return self.name

class Disk(models.Model):
    name = models.CharField(max_length=50)
    about = models.TextField()
    audio = models.ManyToManyField(Audio, blank=True)
    images = models.ManyToManyField(Image, blank=True)
    def __str__(self):
        return self.name