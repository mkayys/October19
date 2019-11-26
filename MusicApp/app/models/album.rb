class Album < ApplicationRecord
    validates :title, :year, :live, presence: true
    validates :title, uniqueness: true
    vaildates :band_id, uniqueness: true

    belongs_to :band

end
