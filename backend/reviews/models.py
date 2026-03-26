from django.db import models

# Create your models here.
from django.db import models
from django.conf import settings
from logbook.models import Logbook

class LogReview(models.Model):

    ACTION_CHOICES = [
        ('approved', 'Approved'),
        ('revision_requested', 'Revision Requested'),
        ('rejected', 'Rejected')
    ]

    Logbook = models.ForeignKey(
        Logbook,
        on_delete=models.CASCADE,
        related_name='reviews'
    )
    reviewer = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='log_reviews'
    )
    comment = models.TextField(blank=True)
    action = models.CharField(
        max_length=30,
        choices=ACTION_CHOICES
    )
    reviewed_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Review by {self.reviewer.username} on {self.Logbook}"