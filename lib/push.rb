# typed: strict
# frozen_string_literal: true

require 'fileutils'
require 'open3'

module Quick
  class Push
    class << self
      extend T::Sig

      sig { params(message: T.nilable(String)).void }
      def push_changes(message = nil)
        message ||= 'Quick auto-commit'

        stdout, _stderr, _status = Open3.capture3('git status --porcelain')
        if stdout.strip.empty?
          puts 'No changes to commit.'
          return
        end

        system('git add .')
        system('git', 'commit', '-m', message)

        puts 'Pushing changes...'
        system('git push')
      end
    end
  end
end
