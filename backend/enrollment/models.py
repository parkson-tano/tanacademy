from django.db import models
from curriculum.models import Course
# from django.contrib.auth.models import User
from django.conf import settings
User = settings.AUTH_USER_MODEL
# Create your models here.

class PaymentMethod(models.Model):
    title = models.CharField(max_length=256)

    def __str__(self):
        return self.title

class Enrollment(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, null=True, related_name='course')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    price = models.FloatField(null=True, blank=True)
    phone = models.CharField(max_length=40, blank=True, null=True)
    payment_method = models.ForeignKey(PaymentMethod, null=True, on_delete=models.SET_NULL)
    complete = models.BooleanField(default=True)
    paid = models.BooleanField(default=False)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.user} enroll {self.course}'


class Payment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    amount = models.IntegerField(null=True, blank=True)
    enrollment = models.ForeignKey(
        Enrollment, null=True, blank=True, on_delete=models.CASCADE, related_name='enrollment')
    is_complete = models.BooleanField(default=False)
    payment_method = models.ForeignKey(PaymentMethod, null=True, on_delete=models.SET_NULL)
    phone_number = models.CharField(max_length=15)
    reference = models.CharField(null=True, blank=True, max_length=100)
    status = models.CharField(null=True, blank=True, max_length=100)
    reason = models.CharField(null=True, blank=True, max_length=100)
    code = models.CharField(null=True, blank=True, max_length=100)
    operator = models.CharField(null=True, blank=True, max_length=100)
    operator_ref = models.CharField(null=True, blank=True, max_length=100)
    external_ref = models.CharField(null=True, blank=True, max_length=100)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{str(self.user.userprofile.first_name)} {str(self.user.userprofile.last_name)}'