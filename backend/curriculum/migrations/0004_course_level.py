# Generated by Django 4.1 on 2022-08-21 09:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('curriculum', '0003_course_amount_course_cancel_amount'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='level',
            field=models.CharField(blank=True, max_length=256, null=True),
        ),
    ]