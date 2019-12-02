class PostsController < ApplicationController

    def create
        @post = Post.new(post_params)
        @post.author_id = current_user.id
        if @post.save
            redirect_to sub_url(@post.sub_id)
        else
            flash.now[:errors] = @post.errors.full_messages
            render :new
        end
    end

    def show
        @post = Post.find(params[:id])
        render :show
    end

    def edit
        @post = Post.find(params[:id])
        render :edit
    end

    def update
    end

    def destroy
        @post = Post.find(params[:id])
        @post.destroy
        redirect_to sub_url(@post.sub_id)
    end

    private
    def post_params
        params.require(:post).permit(:title, :url, :content, :sub_id)
    end
end
