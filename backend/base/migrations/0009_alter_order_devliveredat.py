# Generated by Django 5.0.4 on 2024-05-13 15:32

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0008_alter_order_devliveredat'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='devliveredAt',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
