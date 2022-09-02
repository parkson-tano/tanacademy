from django.db import models
from django.contrib.auth.models import AbstractUser
# from django.utils.translation import ugettext_lazy as _
from django.conf import settings
from datetime import date
from django.utils.translation import gettext as _

class User(AbstractUser):
	username = models.CharField(max_length = 50, blank = True, null = True, unique = True)
	email = models.EmailField(_('email address'), unique = True)
	profile_pic = models.ImageField(upload_to="profile_pic", null=True, blank=True)
	phone_number = models.CharField(max_length=15, null=True, blank=True)
	date_created = models.DateTimeField(auto_now_add=True)
	USERNAME_FIELD = 'email'
	REQUIRED_FIELDS = ['first_name', 'last_name']
	def __str__(self):
		return "{}".format(self.email)
