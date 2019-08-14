require 'test_helper'

class CategoryTest < ActiveSupport::TestCase

  def setup
    @category = Category.new(name: "sports")
  end

  test "test name 1" do
    assert @category.valid?
  end
 #in command line: rails test

 test "name should be present" do
   @category.name = " "
   assert_not @category.valid?
   #expects a "false" return to pass test
 end

 test "name should be unique" do
   @category.save
   category2 = Category.new(name:"sports")
   assert_not category2.valid?
   #already made category "sports", so we expect a false or nil from this
 end

 test "name should not be too long" do
   category.name = "a" * 26
   assert_not @category.valid?
 end

 test "name should not be too short" do
   @category.name = "aa"
   #need at least 3 letters, so two letters long for false
   assert_not @category.valid?
 end

end
