<p align="center"><img src="https://laravel.com/assets/img/components/logo-laravel.svg"></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/d/total.svg" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/v/stable.svg" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/license.svg" alt="License"></a>
</p>

## About Laract

Laract is a Laravel + React Starter Project to lessen the time setting up a new project

## Stack
- Laravel
- React

## Starting a NEW PROJECT
- `git clone https://github.com/aindong/laract.git projectName` (any project name that you want)
- go to `projectName` folder
- copy .env.example as .env `cp .env.example .env`
- execute `composer install`
- generate key `php artisan key:generate`
- then execute `npm install`
- update `.env` to your desired settings
- to instatiate laravel passport, execute `php artisan passport:install`
- then run `php artisan migrate` for the migrations

##### TODO
- [x] Add React
- [x] Add React Router
- [x] Add Redux
- [x] Add Redux-Saga
- [x] Home Page
- [x] About Page
- [ ] Blog Page
- [ ] Contact Us Page
- [x] Login Page
- [ ] Registration
- [x] Authentication using passport
- [x] Code Splitting
- [ ] User Management
- [ ] Permission and Roles
- [ ] Tests
