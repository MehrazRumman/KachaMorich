# Generated by Django 5.0.4 on 2024-05-13 15:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0007_remove_order_deliveredat_order_devliveredat_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='devliveredAt',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
    ]