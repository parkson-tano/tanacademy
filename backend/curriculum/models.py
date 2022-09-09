from django.db import models
from autoslug import AutoSlugField
# from django.contrib.auth.models import User
from django.conf import settings
from PIL import Image
User = settings.AUTH_USER_MODEL
# Create your models here.

STATUS = (
    ('Free', 'free'),
    ('Paid', 'paid')
)

class Category(models.Model):
    title = models.CharField(max_length=256)
    slug = AutoSlugField(populate_from='title')

    def __str__(self):
        return self.title

class SubCategory(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    title = models.CharField(max_length=256)
    slug = AutoSlugField(populate_from='title')

    def __str__(self):
        return f'{self.title} for {self.category}'

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
    enrol = models.IntegerField(default=0)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)

        img = Image.open(self.cover_image.path)
        if img.height > 200 or img.width > 200:
            output_size = (300, 300)
            img.thumbnail(output_size)
            img.save(self.cover_image.path)

class Chapter(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='chapter')
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
    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)

        img = Image.open(self.image.path)
        if img.height > 200 or img.width > 200:
            output_size = (300, 300)
            img.thumbnail(output_size)
            img.save(self.image.path)
    
class Curriculum(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='curriculum')
    item = models.TextField()
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.course} curriculum'
    