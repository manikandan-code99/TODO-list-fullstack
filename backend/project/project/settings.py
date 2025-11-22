

from pathlib import Path
from decouple import config

BASE_DIR = Path(__file__).resolve().parent.parent


SECRET_KEY = 'django-insecure-dg@)m&j078pc3)n$=4&b99+bc@!9=zvkk8=vl3ouqv&8ap)q-j'

DEBUG = True

ALLOWED_HOSTS = ["*"]

AUTH_USER_MODEL = 'auth_jwt_app.User'

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'auth_jwt_app',
    'rest_framework_simplejwt',
    'corsheaders',
    'feedback',
    
]

MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'project.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'project.wsgi.application'


# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.sqlite3',
#         'NAME': BASE_DIR / 'db.sqlite3',
#     }
# }

# DATABASES = {
#     'default': {
#       'ENGINE': 'django.db.backends.postgresql',
#         'NAME': config('db_name'),       #  database name you just created
#         'USER': 'postgres',          # or your pgAdmin username
#         'PASSWORD': config('pass'),   # password you set or confirmed
#         'HOST': 'localhost',
#         'PORT': '5432',
#     }
# }

import dj_database_url

DATABASES = {
    'default': dj_database_url.config(
        default=config('DATABASE_URL')
    )
}


AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True

STATIC_URL = 'static/'

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'


from datetime import timedelta

REST_FRAMEWORK = {
    # 'DEFAULT_PERMISSION_CLASSES':(
    #     'rest_framework.permissions.IsAuthenticated'
    # ),
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
}
SIMPLE_JWT = {
    # 'ACCESS_TOKEN_LIFETIME': timedelta(days=2),
    # 'REFRESH_TOKEN_LIFETIME': timedelta(days=5),
    # 'ROTATE_REFRESH_TOKENS':True,
    # 'BLACKLIST_AFTER_ROTATION':True,
}

# CORS_ALLOWED_ORIGINS = ['http://localhost:5173'
#   ]

CORS_ALLOW_ALL_ORIGINS: True
