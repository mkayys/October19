require 'rspec'
require 'algorithms'

# describe '#hello world' do 
#     it "returns hello world" do
#         expect(hello_world).to eq("Hello World")
#     end
# end

describe 'my_uniq' do
    let(:array) { [1, 2, 1, 3, 3] }
    let(:unique_array) { [1, 2, 3]}
    
    it "should not mutate original array" do
        expect(my_uniq(array)).to_not change{ array }
    end

    it "remove duplicates" do
        unique_array.each do |num|
            expect(array).to include(num)
        end
    end
end