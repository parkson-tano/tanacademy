from django.urls import path
from .views import *
urlpatterns = [
    path("payment", PaymentCreateViewAPI.as_view(), name='payment_create'),
    path("payment/", PaymentCreateViewAPI.as_view()),
    path("payment/<int:pk>", PaymentApiView.as_view(), name='payment_api'),
    path("payment/<int:pk>/", PaymentApiView.as_view()),
    path("payment-method", PaymentMethodCreateViewAPI.as_view(), name='paymentmethod_create'),
    path("payment-method/", PaymentMethodCreateViewAPI.as_view()),
    path("payment-method/<int:pk>", PaymentMethodApiView.as_view(), name='paymentmethod_api'),
    path("payment-method/<int:pk>/", PaymentMethodApiView.as_view()),
    path("", EnrollmentCreateViewAPI.as_view(), name='paymentmethod_create'),
    path("", EnrollmentCreateViewAPI.as_view()),
    path("<int:pk>", EnrollmentApiView.as_view(), name='paymentmethod_api'),
    path("<int:pk>/", EnrollmentApiView.as_view()),
    path("c", CEnrollmentCreateViewAPI.as_view(), name='paymentmethod_create'),
    path("c/<int:pk>", CEnrollmentApiView.as_view(), name='paymentmethod_api'),
    path("mycourse/<int:user_id>/", UserEnrollment.as_view()),

    
]
