class Album < ApplicationRecord
    validates :title, :year, :live, presence: true
    validates :title, uniqueness: true
    validates :band_id, uniqueness: true

    belongs_to :band

end
