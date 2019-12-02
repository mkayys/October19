class SessionsController < ApplicationController
    
    def new
        render :new
    end

    def create
        @user = User.find_by_credentials(username, password)
        
        if @user
            login!(@user)
            redirect_to subs_url
        else
            flash.now[:errors] = ["Invalid credentials"]
            render :new
        end
    end

    def destroy
        logout!
        redirect_to new_session_url
    end
end
