require 'sloth' # automatically searches lib folder for this file
# require 'rspec'

describe Sloth do

    subject(:sloth) { Sloth.new('Gerald') }
    # to not be redundant for each initialize case
    # be careful of using to be (checking if same object id) vs to eq

    describe '#initialize' do
        it "assigns a name successfully" do
            # sloth = Sloth.new('Gerald')
            expect(sloth.name).to eq('Gerald')
        end

        it "assigns an empty food array" do
            sloth = Sloth.new('Gerald')
            expect(sloth.food).to eq([])
        end

        it "assigns an empty drinks hash" do
            # sloth = Sloth.new('Gerald')
            expect(sloth.drinks).to eq({})
        end
    end
end