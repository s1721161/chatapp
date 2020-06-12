class UsersController < ApplicationController

  def index
    @allchats = Allchat.all
    @users = User.all
    if user_signed_in?
    @user = User.find_by(id: current_user.id)
    @user.online=true
    @user.save

    respond_to do |format|      
      format.html 
      @new_messages = nil
      format.json{@new_allchat = Allchat.where('id > ?', params[:allchat][:id])}
    end

    end
  end

  def create
    @allchat = Allchat.create(params.require(:allchat).permit(:name, :content, :image, :user_id))
    @allchat.save
  end

 def show
    @user=User.find(params[:id])
    @currentUserEntry=Entry.where(user_id: current_user.id)
    @userEntry=Entry.where(user_id: @user.id)
    if @user.id == current_user.id
    else
      @currentUserEntry.each do |cu|
        @userEntry.each do |u|
          if cu.room_id == u.room_id then
            @isRoom = true
            @roomId = cu.room_id
          end
        end
      end
      if @isRoom
      else
        @room = Room.new
        @entry = Entry.new
      end
    end
  end

  end
