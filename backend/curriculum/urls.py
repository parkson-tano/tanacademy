from django.urls import path
from .views import *

app_name = "enrollment"
urlpatterns = [
    path("", CourseCreateViewAPI.as_view(), name='course_create'),
    path("", CourseCreateViewAPI.as_view()),
    path("<int:pk>", CourseViewAPI.as_view(), name='course_api'),
    path("<int:pk>/", CourseViewAPI.as_view()),
    path("chapter",ChapterCreateViewAPI.as_view(), name='chapter_create'),
    path("chapter/", ChapterCreateViewAPI.as_view()),
    path("chapter/<int:pk>", ChapterViewAPI.as_view(), name='chapter_api'),
    path("chapter/<int:pk>/", ChapterViewAPI.as_view()),
    path("lesson",LessonCreateViewAPI.as_view(), name='lesson_create'),
    path("lesson/", LessonCreateViewAPI.as_view()),
    path("lesson/<int:pk>", LessonViewAPI.as_view(), name='lesson_api'),
    path("lesson/<int:pk>/", LessonViewAPI.as_view()),
    path("curriculum",CurriculumCreateViewAPI.as_view(), name='curriculum_create'),
    path("curriculum/", CurriculumCreateViewAPI.as_view()),
    path("curriculum/<int:pk>", CurriculumViewAPI.as_view(), name='curriculum_api'),
    path("curriculum/<int:pk>/", CurriculumViewAPI.as_view()),
]
