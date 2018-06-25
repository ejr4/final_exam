class CreateAuctions < ActiveRecord::Migration[5.2]
  def change
    create_table :auctions do |t|
      t.string :title
      t.text :details
      t.decimal :r_price
      t.datetime :ending_date

      t.timestamps
    end
  end
end
