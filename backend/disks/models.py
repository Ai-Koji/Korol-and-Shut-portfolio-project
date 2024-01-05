from django.db import models

class Audio(models.Model):
    name = models.CharField(max_length=50)
    file = models.FileField(upload_to="audio/disk/")
    def __str__(self):
        return self.name

class Image(models.Model):
    name = models.CharField(max_length=50)
    file = models.FileField(upload_to="images/disk/")
    def __str__(self):
        return self.name

class Disk(models.Model):
    name = models.CharField(max_length=50)
    main_image = models.FileField(upload_to="images/disk/", blank=True)
    about = models.TextField()
    audio = models.ManyToManyField(Audio, blank=True)
    images = models.ManyToManyField(Image, blank=True)
    def __str__(self):
        return self.name

class Cover(models.Model):
    name = models.CharField(max_length=50)
    main_image = models.FileField(upload_to="images/disk/", blank=True)
    about = models.TextField()
    audio = models.ManyToManyField(Audio, blank=True)
    images = models.ManyToManyField(Image, blank=True)
    def __str__(self):
        return self.name