class ShortenedUrl < ApplicationRecord
    validates :long_url, :short_url, :user_id, presence: true
    validates :short_url, uniqueness: true

    belongs_to :submitter,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    def self.random_code
        while true
            random_str = SecureRandom::urlsafe_base64
        end
    end

end
