# KachaMorich
An Ecommerce Website


## System Design

 <img width="4473" alt="Untitled (2)" src="https://github.com/MehrazRumman/KachaMorich/assets/59512321/fd4ac39c-3aae-467e-a09d-28edf2123334">


## ER Diagram

![drawSQL-image-export-2024-05-15](https://github.com/MehrazRumman/KachaMorich/assets/59512321/358ed808-ab28-45a8-8ad4-e49e7423f44f)


## Use-case Diagram

 <img width="2912" alt="Untitled" src="https://github.com/MehrazRumman/KachaMorich/assets/59512321/9827c32c-3403-4c21-af64-542d38beeab8">


## Features for Client
- **Sign Up**: Clients can create an account on the platform by signing up.

- **Log In**: Registered clients can log in to their accounts.

- **Purchase a Product**: Clients can browse and purchase products from the platform.
  
- **Order Payment with bKash**: Clients can choose bKash as a payment option for their orders.

- **Edit Profile**: Clients can edit their profiles, including personal information and preferences.

- **Product Review**: Clients can leave reviews and ratings for products they have purchased.

- **View Order List**: Clients can view a list of their past and current orders.



## Features for Admin

- **View User List**: Admin can view a list of all registered users on the platform.

- **View Product List**: Admin can access a list of all products available on the platform.

- **Edit Product**: Admin can edit details of existing products, such as name, description, and price.

- **Make Admin**: Admin can promote other users to admin status, granting them access to admin features.

- **Change Delivery Status**: Admin can update the delivery status of orders, marking them as pending, shipped, delivered, etc.

- **Change Payment Status**: Admin can update the payment status of orders, marking them as paid, pending, refunded, etc.

## Technologies USED 

- **Frontend**:
  - ReactJS

- **State Management**:
  - Redux

- **Backend**:
  - Django
  - Django Rest Framework

- **Database**:
  - PostgreSQL

- **Authentication**:
  - JWT (JSON Web Tokens)

- **API Testing**:
  - Postman

## Setup Instructions

### Django Backend

1. **Install Django**:
   - You can install Django using pip, the Python package manager:
     ```
     pip install django
     ```

2. **Create a Django Project**:
   - Create a new Django project using the following command:
     ```
     django-admin startproject project_name
     ```

3. **Create a Django App**:
   - Create a Django app within your project using:
     ```
     python manage.py startapp app_name
     ```

4. **Install Django REST Framework** (Optional but recommended):
   - Django REST Framework (DRF) is a powerful toolkit for building Web APIs in Django. Install it using:
     ```
     pip install djangorestframework
     ```

5. **Set Up Django Backend**:
   - Define your models, views, and serializers (if using DRF) to create the necessary API endpoints for your React frontend to interact with.

6. **Run Django Development Server**:
   - Start the Django development server:
     ```
     python manage.py runserver
     ```

### ReactJS Frontend

1. **Install Node.js and npm**:
   - React requires Node.js and npm (Node Package Manager) for managing dependencies. You can download and install Node.js from [nodejs.org](https://nodejs.org/).

2. **Create a React App**:
   - Create a new React app inside your Django project directory using:
     ```
     npx create-react-app frontend
     ```

3. **Proxy Requests from React to Django Backend** (Optional but recommended):
   - During development, you might want to proxy API requests from your React app to the Django backend to avoid CORS issues. You can use the `http-proxy-middleware` package for this.

4. **Run React Development Server**:
   - Start the React development server:
     ```
     cd frontend
     npm start
     ```

5. **Start Developing**:
   - Now, you can start developing your application. Build your React components and connect them to the Django backend using API calls.

6. **Deployment**:
   - For deployment, you'll typically need to configure your Django app to serve static files and configure your production server (e.g., Nginx, Apache) to serve both the Django app and the React frontend.
  

## Screenshots
![Screenshot from 2024-05-15 00-54-51](https://github.com/MehrazRumman/KachaMorich/assets/59512321/58bd6594-fc55-4569-bb67-a275c995f8d9)
![Screenshot from 2024-05-15 00-55-01](https://github.com/MehrazRumman/KachaMorich/assets/59512321/99108851-c204-428d-93f0-61fcc033bc78)
![Screenshot from 2024-05-15 00-55-07](https://github.com/MehrazRumman/KachaMorich/assets/59512321/bcedae44-eee1-49be-949a-3d7855a5697a)
![Screenshot from 2024-05-15 00-55-12](https://github.com/MehrazRumman/KachaMorich/assets/59512321/16fb2586-ba36-44cb-b9ed-2b316aa35034)
![Screenshot from 2024-05-15 00-55-19](https://github.com/MehrazRumman/KachaMorich/assets/59512321/ae719bb2-d895-4157-9192-e97732ba99ac)
![Screenshot from 2024-05-15 00-55-41](https://github.com/MehrazRumman/KachaMorich/assets/59512321/6db2d137-4a2f-4e88-adf7-f99b3603b41d)
![Screenshot from 2024-05-15 00-56-22](https://github.com/MehrazRumman/KachaMorich/assets/59512321/63f940f9-aec1-439f-8f34-1265249b71b5)







     














  


