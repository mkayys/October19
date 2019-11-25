class UsersController < ApplicationController
    def new
        @user = User.new
        render :new
    end

    def create
        @user = User.new(user_params)

        if @user.save

        else
            render :new
        end
    end

    def show
        @user = User.find(params[:id])
        
        if @user
            render :show
        else
            # redirect_to 
        end
    end
    private
    def user_params
        params.require(:user).permit(:username, :password)
    end
end
