from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Blog, Contact

# Register your models here.
admin.site.register(Blog)
admin.site.register(Contact)
