class User < ActiveRecord::Base
  #activerecord has the pasword digesting function for me
  has_secure_password
  has_many :users
end
