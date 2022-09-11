from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework import status, permissions
from rest_framework.views import APIView
# Create your views here.

class PaymentMethodCreateViewAPI(generics.ListCreateAPIView):
    queryset = PaymentMethod.objects.all()
    serializer_class = PaymentMethodSerializer

class PaymentMethodApiView(generics.RetrieveUpdateDestroyAPIView):
    queryset = PaymentMethod.objects.all()
    serializer_class = PaymentMethodSerializer

class PaymentCreateViewAPI(generics.ListCreateAPIView):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer

class PaymentApiView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer

class EnrollmentCreateViewAPI(generics.ListCreateAPIView):
    queryset = Enrollment.objects.all()
    serializer_class = EnrollmentSerializer

class EnrollmentApiView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Enrollment.objects.all()
    serializer_class = EnrollmentSerializer

class CEnrollmentCreateViewAPI(generics.ListCreateAPIView):
    queryset = Enrollment.objects.all()
    serializer_class = CreateEnrollmentSerializer

class CEnrollmentApiView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Enrollment.objects.all()
    serializer_class = CreateEnrollmentSerializer

class UserEnrollment(generics.ListAPIView):
    serializer_class = EnrollmentSerializer
    def get_queryset(self):
        user_id = self.kwargs['user_id']
        return Enrollment.objects.filter(user = user_id)
