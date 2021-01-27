class ChangeSubsColumn < ActiveRecord::Migration[5.2]
  def change
    remove_index :subs, :moderator_id
    add_index :subs, :moderator_id
  end
end
