class CreateAllchats < ActiveRecord::Migration[5.1]
  def change
    create_table :allchats do |t|
      t.string :name
      t.text :content
      t.string :image
      t.integer :user_id

      t.timestamps
    end
  end
end
