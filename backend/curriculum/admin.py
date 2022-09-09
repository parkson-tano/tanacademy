from django.contrib import admin
from .models import *
# Register your models here.

class CourseAdmin(admin.ModelAdmin):
    list_display = ('title','status')

admin.site.register(Course, CourseAdmin)

class ChapterAdmin(admin.ModelAdmin):
    list_display = ('course','title', 'chapter_number')

admin.site.register(Chapter, ChapterAdmin)

class LessonAdmin(admin.ModelAdmin):
    list_display = ('chapter','title', 'lesson_number')

admin.site.register(Lesson, LessonAdmin)

class CurriculumAdmin(admin.ModelAdmin):
    list_display = ('course',)

admin.site.register(Curriculum, CurriculumAdmin)

class CategoryAdmin(admin.ModelAdmin):
    list_display = ('title',)

admin.site.register(Category, CategoryAdmin)

class SubCategoryAdmin(admin.ModelAdmin):
    list_display = ('title','category')

admin.site.register(SubCategory, SubCategoryAdmin)