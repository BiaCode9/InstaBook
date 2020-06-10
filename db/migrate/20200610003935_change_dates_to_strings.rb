# frozen_string_literal: true

class ChangeDatesToStrings < ActiveRecord::Migration[6.0]
  def change
    change_column :posts, :startdate, :string, null: false, default: ''
    change_column :posts, :enddate, :string, null: false, default: ''
  end
end
