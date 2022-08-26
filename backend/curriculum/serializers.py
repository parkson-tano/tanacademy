from rest_framework import serializers
from .models import *

class LessonSerializer(serializers.ModelSerializer):

    class Meta:
        model = Lesson
        fields = "__all__"

class ChapterSerializer(serializers.ModelSerializer):
    lesson = LessonSerializer(many=True, read_only=True)
    class Meta:
        model = Chapter
        fields = "__all__"

class CurriculumSerializer(serializers.ModelSerializer):
    class Meta:
        model = Curriculum
        fields = "__all__"

class CourseSerializer(serializers.ModelSerializer):
    chapter = ChapterSerializer(many=True, read_only=True)
    curriculum = CurriculumSerializer(many=True, read_only=True) 
    class Meta:
        model = Course
        fields = "__all__"
