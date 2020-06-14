# frozen_string_literal: true

class PostsController < ApplicationController
  before_action :set_post, only: %i[show update destroy]
  before_action :authorize_request, only: %i[create update destroy user_index]
  before_action :is_this_mine, only: %i[update destroy]

  # GET /posts
  def index
    @posts = Post.all

    render json: @posts, include: [{ user: { only: %i[id username] } }, { comments: { include: { user: { only: %i[id username] } } } }]
  end

  def user_index
    @posts = @current_user.posts

    render json: @posts, include: [{ user: { only: %i[id username] } }, { comments: { include: { user: { only: %i[id username] } } } }]
  end

  # GET /posts/1
  def show
    render json: @post
  end

  # POST /posts
  def create
    @post = Post.new(post_params)
    @post.user = @current_user
    if @post.save
      render json: @post, status: :created, location: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_post
    @post = Post.find(params[:id])
    # @food = @current_user.posts.find(params[:id])
  end

  def is_this_mine
    render json: { error: 'unauthorized' }, status: :unauthorized if @current_user.id != @post.user_id
  end

  # Only allow a trusted parameter "white list" through.
  def post_params
    params.require(:post).permit(:name, :description, :location, :startdate, :enddate, :user_id)
  end
end
