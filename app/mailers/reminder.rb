class Reminder < ActionMailer::Base
  default from: "jinxin238357@outlook.com"


  def find_all_receivers
  	@rules = Rule.where("paid =?", false)
  	for rule in @rules
  		#if 
  		reminder_email(rule)
  	end
  end


  def reminder_email(rule)
  	@rule = rule 
  	mail(to: @rule.identifier, subject: "You've got a bill") 
  end
end
