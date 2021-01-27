require 'sloth' # automatically searches lib folder for this file
# require 'rspec'

# require 'food'

describe Sloth do

    subject(:sloth) { Sloth.new('Gerald') } #sloth available in the nested describe blocks
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

    describe '#eat' do
        # it 'adds the food to the food array' do
        #     sloth.eat('chocolate chip potatoes')
        #     expect(sloth.food).to eq(['chocolate chip potatoes'])
        # end


        # THIS IS AN INTEGRATION TEST
        # it "adds a food instance to the food array" do
        #     pizza = Food.new('pizza') REAL FOOD OBJECT
        #     sloth.eat(pizza)
        #     expect(sloth.food[0]).to be(pizza)
        # end


        # before(:each) do
        #     allow(pizza).to receive(:bitten)
        # end

        # let(:pizza) { double('pizza', bitten: '') }

        let(:pizza) { double('pizza') } # fake Food object, this is good for unit test
        it "adds a food instance to the food array" do
            # pizza = Food.new('pizza')
            allow(pizza).to receive(:bitten)

            sloth.eat(pizza)
            expect(sloth.food).to include(pizza)
        end

        it 'returns the food eatten' do
            expect(sloth.eat('tuna')).to eq('tuna')
        end
    end

    describe '#run' do
        context 'when an invalid direction is given' do
            it 'raises an ArgumentError' do
                # it has to be in a block because otherwise it executes and evaluates to the error
                expect { sloth.run('narnia') }.to raise_error(ArgumentError)
                # expect{ sloth.run('narnia') }.to raise_error (works but then gives you a warning)
            end
        end

        context 'when a valid direction is given' do
            it 'returns the direction' do
                expect(sloth.run('south')).to include('south')
            end
        end
    end

    describe '#drink' do
        # call methods here, don't do assignment
        # functionality you want to run before each it block goes here

        # subject => instance of an object
        # before(:each) => an action before the it block that we want done

        # order of before(:each) doesn't matter
        before(:each) do
            sloth.drink('beer', 99)
        end

        context 'without previous drinks' do
            it 'should add a key-value to the drinks hash' do
                # sloth.drink('beer', 99)
                expect(sloth.drinks['beer']).to eq(99)
            end
        end

        context 'with multiple drinks' do
            it 'should not confuse the amounts of two different drinks' do
                # sloth.drink('beer', 99)
                sloth.drink('OJ', 3)
                expect(sloth.drinks.keys.length).to eq 2
                # parenthesis is not required in ruby
                expect(sloth.drinks).to have_key('OJ')
                expect(sloth.drinks['OJ']).to eq(3)
                expect(sloth.drinks['beer']).to eq 99
            end
        end
    end

    # CAN'T TEST PRIVATE METHODS

    # describe '#secret_sloth' do
    #     it 'returns shh' do
    #         expect(sloth.secret_sloth).to eq('Shhh')
    #     end
    # end
end