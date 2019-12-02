class SessionsController < ApplicationController
    
    def new
        render :new
    end

    def create
        @user = User.find_by_credentials(username, password)
        
        if @user
            login!(@user)
            # redirect_to
        else
            flash.now[:errors] = ["Invalid credentials"]
            render :new
        end
    end

    def destroy
        logout!
        # redirect_to 
    end
end
