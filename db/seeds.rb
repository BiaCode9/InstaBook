# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all
Comment.destroy_all

@user = User.create!(firstname: 'Bianca', lastname: 'Biagioni', username: 'BiaB', email: 'BiaCode2020@gmail.com', password: '123456')

@post = Post.create!(name: 'DJ GIG @ Webster Hall', description: 'Cupcake ipsum dolor sit amet. Sugar plum macaroon cheesecake caramels. Croissant marshmallow topping muffin croissant.  Toffee cookie liquorice wafer jelly sweet apple pie. Croissant sugar plum apple pie. Powder cookie dragée brownie lemon drops gingerbread', startdate: '6/15/20', enddate: '6/16/20', user: @user)

Comment.create(name: "I'm Interested!", description: 'Cupcake ipsum dolor sit amet. Sugar plum macaroon cheesecake caramels.', post: @post, user: @user)
