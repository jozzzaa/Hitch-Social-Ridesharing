require 'active_record'

options = {
  adapter: 'postgresql',
  database: 'hitch',
}

ActiveRecord::Base.establish_connection( ENV['DATABASE_URL'] || options)
