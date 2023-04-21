from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Blog

# Register your models here.
admin.site.register(Blog)
