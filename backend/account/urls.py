from django.urls import path
from .views import *
urlpatterns = [
    path("", UserCreateViewAPI.as_view(), name='payment_create'),
    path("", UserCreateViewAPI.as_view()),
    path("<int:pk>", UserApiView.as_view(), name='payment_api'),
    path("<int:pk>/", UserApiView.as_view()),
    path("userprofile", UserProfileCreateViewAPI.as_view(), name='paymentmethod_create'),
    path("userprofile/", UserProfileCreateViewAPI.as_view()),
    path("userprofile/<int:pk>", UserProfileApiView.as_view(), name='paymentmethod_api'),
    path("userprofile/<int:pk>/", UserProfileApiView.as_view()),
]
