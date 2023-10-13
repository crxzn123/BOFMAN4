"""
WSGI config for BOFMAN4 project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

from whitenoise import WhiteNoise

from pathlib import Path

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'BOFMAN4.settings')

application = get_wsgi_application()
application = WhiteNoise(application, root=str(Path(__file__).resolve().parent.parent) + "/static")