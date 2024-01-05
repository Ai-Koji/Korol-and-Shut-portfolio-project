from django.contrib import admin
from .models import *

class DisksAdmin(admin.ModelAdmin):
    filter_horizontal = ('audio', 'images')

admin.site.register(Disk, DisksAdmin)
admin.site.register(Cover, DisksAdmin)
admin.site.register(Audio)
admin.site.register(Image)