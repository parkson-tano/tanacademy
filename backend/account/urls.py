from django.urls import path
from .views import *
from rest_framework_simplejwt.views import TokenRefreshView
urlpatterns = [
    path("", UserCreateViewAPI.as_view(), name='payment_create'),
    path("", UserCreateViewAPI.as_view()),
    path("<int:pk>", UserApiView.as_view(), name='payment_api'),
    path("<int:pk>/", UserApiView.as_view()),
    path("userprofile", UserProfileCreateViewAPI.as_view(), name='paymentmethod_create'),
    path("userprofile/", UserProfileCreateViewAPI.as_view()),
    path("userprofile/<int:pk>", UserProfileApiView.as_view(), name='paymentmethod_api'),
    path("userprofile/<int:pk>/", UserProfileApiView.as_view()),
    path('register/', RegisterView.as_view(), name='auth_register'),
    path('login/', MyObtainTokenPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
