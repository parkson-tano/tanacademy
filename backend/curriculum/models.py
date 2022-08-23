from django.db import models
from autoslug import AutoSlugField
from django.contrib.auth.models import User
# Create your models here.

STATUS = (
    ('Free', 'free'),
    ('Paid', 'paid')
)

class Course(models.Model):
    tutor = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=256)
    description = models.TextField()
    status = models.CharField(max_length=25, choices=STATUS, default='free')
    amount = models.FloatField(default=0)
    level  = models.CharField(max_length=256, null=True, blank=True)
    cancel_amount = models.FloatField(null=True, blank=True)
    cover_image = models.FileField(upload_to = "course_image", null=True, blank=True)
    slug = AutoSlugField(populate_from = "title", unique=True)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Chapter(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    chapter_number = models.IntegerField()
    title = models.CharField(max_length=256)
    slug = AutoSlugField(populate_from = 'title', unique_with='course')
    description = models.TextField(blank=True, null=True)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.title} of {self.course.title}'

class Lesson(models.Model):
    chapter = models.ForeignKey(Chapter, on_delete=models.CASCADE, related_name='lesson')
    title = models.CharField(max_length=256)
    lesson_number = models.IntegerField()
    slug = AutoSlugField(populate_from='title', unique_with='chapter')
    image = models.ImageField(upload_to='lesson_image', null=True, blank=True)
    video_url = models.URLField()
    date_created = models.DateTimeField(auto_now_add=True)
    class Meta:
        unique_together = ['chapter', 'lesson_number']
        ordering = ['lesson_number']
    def __str__(self):
        return self.title
    
class Curriculum(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    item = models.TextField()
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.course} curriculum'
    