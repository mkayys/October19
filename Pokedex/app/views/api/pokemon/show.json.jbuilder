json.pokemon do
    json.set! @poke.id do
        json.extract! @poke, :id, :name, :attack, :defense, :poke_type, :moves, :item_ids
        json.image_url asset_path(@poke.image_url)
    end
end

json.items do 
    @poke.items.each do |item|
        json.set! item.id do
            json.extract! item, :id, :name, :pokemon_id, :price, :happiness
            json.image_url asset_path(item.image_url)
        end
    end
end