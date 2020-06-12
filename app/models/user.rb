class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :timeoutable
  
  mount_uploader :image, ImageUploader

  has_many :message, dependent: :destroy
  has_many :entries, dependent: :destroy

end
