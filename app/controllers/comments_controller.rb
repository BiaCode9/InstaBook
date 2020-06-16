# frozen_string_literal: true

class CommentsController < ApplicationController
  before_action :set_comment, only: %i[show update destroy]
  before_action :set_post, except: %i[show update destroy]
  before_action :authorize_request, only: %i[create update destroy]
  before_action :is_this_mine, only: %i[update destroy]

  # GET /comments
  def index
    @comments = @post.comments

    render json: @comments
  end

  # GET /comments/1
  def show
    render json: @comment
  end

  # POST /comments
  def create
    puts params
    @comment = Comment.new(comment_params)
    @comment.user = @current_user
    @comment.post = @post
    if @comment.save
      render json: @comment, include: :user, status: :created
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /comments/1
  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /comments/1
  def destroy
    @comment.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_comment
    @comment = Comment.find(params[:id])
  end

  def is_this_mine
    render json: { error: 'unauthorized' }, status: :unauthorized if @current_user.id != @comment.user_id
  end

  def set_post
    @post = Post.find(params[:post_id])
  end

  # Only allow a trusted parameter "white list" through.
  def comment_params
    params.require(:comment).permit(:name, :description, :user_id, :post_id)
  end
end
